import UseEffect from './Hooks/UseEffect';
import ExampleComponent from './Hooks/UseEffectWithEx';
import UseRef from './Hooks/UseRef';
import UseState from './Hooks/UseState';
import ShareContext from './Context/shareContext';
import CheckContext from './checkContext'
import UseMemo from './Hooks/UseMemo';
import UseCallback from './Hooks/UseCallback';
import UseReducer from './Hooks/UseReducer';
import UseImprativeHandle from './Hooks/UseImprativeHandle';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseDebugValue from './Hooks/UseDebugValue';
import SearchTodo from './HocTopic/Todo';
import SearchUser from './HocTopic/Users';
function App() {
  return (
   <>
   <ShareContext>
    <CheckContext/>
   </ShareContext>
    <UseState/>
    <UseEffect/>
    <ExampleComponent/>
    <UseRef/>
    <UseMemo/>
    <UseCallback/>
    <UseReducer/>
    <UseImprativeHandle/>
    <UseLayoutEffect/>
    <UseDebugValue/>
    <SearchTodo/>
    <SearchUser/>
   </>
  );
}

export default App;
