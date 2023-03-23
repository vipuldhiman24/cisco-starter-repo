import React from 'react'
import './Divider.css'
import Leftpane from './Leftpane'
import Rightpane from "./Rigthpane"

function Divider() {
  return (
    <div>

        <div class="row no-gutter  ">
        <div class="conatiner">
            <div class="col">
              <Leftpane/>
            </div>
            <div class="col">
            <Rightpane/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Divider