import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './FileUpload'

function App(){
  return(
    <div>
      <h2>upload image in mysql using nodejs and react</h2>
      <FileUpload/>
    </div>
  );
}
export default App;