import { Route, Switch } from "react-router-dom"
import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import History from './components/History/History'
import Contact from './components/Contact/Contact'

export default(
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/classlist/:class' component={ClassList}/>
    <Route exact path='/student/:id' component={Student} />
    <Route path='/about' render={()=>(
<About>

  
            <Route path="/about/history" component={History} />
           <Route path="/about/contact" component={Contact} />

           </About>) 

   } />
   
    </Switch>
)