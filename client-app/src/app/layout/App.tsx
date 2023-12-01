import { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
const {activityStore} = useStore();

  useEffect(() => {
    //changed request with agent.ts
    //moved to activityStore.ts
    activityStore.loadActivities();
  }, [activityStore] )

if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <>
    <NavBar/>
    <Container style={{marginTop: '7em'}}>
      <h2>Welcome to Reactivities</h2>
      <ActivityDashboard />
    </Container>
    </>
  )
}

export default observer (App);