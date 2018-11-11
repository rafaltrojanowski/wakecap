import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import {
  Datagrid,
  DateField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';
import { UserList } from './user-list';
import dataProvider from './../dataProvider';

const Aside = ({ record }) => (
    <div style={{ width: 80, margin: '1em' }}>
        <Typography variant="title">Supervisor</Typography>
        {record && (
            <Typography variant="body1">
              {record.supervisor}
            </Typography>
        )}
    </div>
);

export class UserShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weeklyHours: null
    }
  }

  componentDidMount() {
    const { id } = this.props;
    this.fetchData(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchData(this.props.id);
    }
  }

  fetchData(id) {
    dataProvider('GET_ONE', 'users', { id: id })
      .then((payload) => {
        this.setState({ weeklyHours: payload.data.hours });
      })
      .catch((e) => {
        console.warn(e)
      });
  }

  render() {
    const { props } = this
    const { weeklyHours } = this.state
    const title = `| Worker #${props.id}`

    if(weeklyHours === null || weeklyHours === undefined) {
      return(<div>Loading data...</div>)
    }

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item sm={4} xs={12}>
            <UserList {...props}/>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Show aside={<Aside />} title={title} {...props}>
              <SimpleShowLayout>
                <TextField source="name" />
                <TextField source="total_hours" />
                <TextField source="last_active_zone" />

                <Divider />

                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={weeklyHours}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Bar dataKey='total_hours' fill="#8884d8">
                      {
                        weeklyHours.map((entry, index) => (
                          <Cell cursor="pointer" key={`cell-${index}`}/>
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                <Divider />

                <ReferenceManyField label="Assigned Helmets" reference="helmets" target="user_id">
                  <Datagrid>
                    <TextField source="uid" />
                    <TextField source="symbol" />
                    <DateField source="created_at" />
                  </Datagrid>
                </ReferenceManyField>
              </SimpleShowLayout>
            </Show>
          </Grid>
        </Grid>
        <Divider/>
      </div>
    )
  }
}
