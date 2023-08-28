import {TreeMapComponent, TreeMapLegend,Inject, LevelsDirective, LevelDirective} from '@syncfusion/ej2-react-treemap';
import './App.css';
function App() {
  return (
    <div className="App">
     <TreeMapComponent dataSource={[
   { Country: "United States", JobDescription: "Sales Department", JobGroup: "Executive", EmployeeCount: 20 },
   { Country: "United States", JobDescription: "Sales", JobGroup: "Analyst", EmployeeCount: 30 },
   { Country: "United States", JobDescription: "Marketing Department", EmployeeCount: 40 },
   { Country: "United States", JobDescription: "Management", EmployeeCount: 80 },
  { Country: "India", JobDescription: "Technical", JobGroup: "Testers", EmployeeCount: 100 },
  { Country: "India", JobDescription: "HR Executives", EmployeeCount: 30 },
  { Country: "India", JobDescription: "Accounts", EmployeeCount: 40 },
  { Country: "UK", JobDescription: "Technical", JobGroup: "Testers", EmployeeCount: 30 },
   { Country: "UK", JobDescription: "HR Executives", EmployeeCount: 50 },
   { Country: "UK", JobDescription: "Accounts", EmployeeCount: 60 }
]}
weightValuePath='EmployeeCount'
renderDirection='TopRightBottomLeft' 
leafItemSettings={{
  labelPath: 'Country',
  fill: '#C33764',
  labelStyle:{color:'white',size:'14'},
  border:{color:'#1D2671',width:1 },
  labelFormat:'${Country}(${JobDescription}-${EmployeeCount})',
  interSectAction: 'WrapByWord',
  labelPosition:'TopCenter',
  gap:7

}}


     ><LevelsDirective>
     <LevelDirective groupPath='Country' fill='#C33764'
      border={{ color: 'white', width: 0.5 }} groupGap={7} 
     headerStyle={{color:'white', size:'14px' }} headerHeight={40} 
     headerFormat='${Country}-${EmployeeCount}' headerAlignment='Center'/>
     <LevelDirective groupPath='JobDescription' fill='#C33764'
      border={{ color: 'white', width: 0.5 }} groupGap={7}
     headerStyle={{color:'white', size:'14px' }} headerHeight={40}
      headerFormat='${JobDescription}-${EmployeesCount}' headerAlignment='Center'/>
     <LevelDirective groupPath='EmployeeCount' fill='#C33764' 
     border={{ color: 'white', width: 0.5 }} groupGap={7}
     headerStyle={{color:'white', size:'14px' }} headerHeight={40} 
     headerFormat='${Country}-${EmployeeCount}' headerAlignment='Center' />
   </LevelsDirective>

  
     </TreeMapComponent>
    </div>
  );
}
export default App;
