import React from 'react'

import pasta from '../assets/pasta.png';
import cheesecake from '../assets/cheese.png';
import lasagne from '../assets/lasagna.png';
import pizza from '../assets/pizza.png';
import tiramissu from '../assets/tiramisu.png';
import rice from '../assets/rice.png';

export default function Popular () {
  return (
    <div className='most-section'>
        <div className=''>
           <p className='most-title'>Most Popular these days !</p>  
        </div>
        <section className="cards-light clearfix">    
            <div className="card-light animated">
                <img src={pasta} alt=""  className="card-light_image"/>
                <div className="card-light_copy">
                    <h3>Pasta:</h3>
                    <p>Ingredient : <br />
                    </p>
                    <ul>
                        <li>Canned tomatoes</li>
                        <li>Garlic</li>
                        <li>Olive oil</li>
                        <li>Dried oregano</li>
                        <li>Salt</li>
                        <li>Onion & chili flakes (optional)</li>
                    </ul>
                    <div className='btn-container'>
                        <button className='btn-most'>How To make</button>
                        <button className='btn-most'>Save</button>
                    </div>
                </div>
            </div>
    
            <div className="card-light animated">
                <img src={lasagne} alt=""className="card-light_image" />
                <div className="card-light_copy">
                    <h3>Lasagne:</h3>
                    <p>Ingredient : <br />
                    </p>
                    <ul>
                        <li>Canned tomatoes</li>
                        <li>Garlic</li>
                        <li>Olive oil</li>
                        <li>Dried oregano</li>
                        <li>Salt</li>
                        <li>Onion & chili flakes (optional)</li>
                    </ul>
                    <div className='btn-container'>
                        <button className='btn-most'>How To make</button>
                        <button className='btn-most'>Save</button>
                    </div>
                </div>
            </div>
    
            <div className="card-light animated">
                <img src={cheesecake} alt=""  className='card-light_image'/>
                <div className="card-light_copy">
                    <h3>Cheesecake :</h3>
                    <p>Ingredient : <br />
                    </p>
                    <ul>
                        <li>Canned tomatoes</li>
                        <li>Garlic</li>
                        <li>Olive oil</li>
                        <li>Dried oregano</li>
                        <li>Salt</li>
                        <li>Onion & chili flakes (optional)</li>
                    </ul>
                    <div className='btn-container'>
                        <button className='btn-most'>How To make</button>
                        <button className='btn-most'>Save</button>
                    </div>
                </div>
            </div>
        </section>
    <section className="cards-light clearfix">    
        <div className="card-light animated">
        <img src={rice} alt=""  className="card-light_image"/>
        <div className="card-light_copy">
          <h3>Riz:</h3>
          <p>Ingredient : <br />
          </p>
          <ul>
            <li>Canned tomatoes</li>
            <li>Garlic</li>
            <li>Olive oil</li>
            <li>Dried oregano</li>
            <li>Salt</li>
            <li>Onion & chili flakes (optional)</li>
          </ul>
          <div className='btn-container'>
          <button className='btn-most'>How To make</button>
          <button className='btn-most'>Save</button>
          </div>
        </div>
      </div>
    
      <div className="card-light animated">
        <img src={pizza} alt=""className="card-light_image" />
        <div className="card-light_copy">
          <h3>Pizza:</h3>
          <p>Ingredient : <br />
          </p>
          <ul>
            <li>Canned tomatoes</li>
            <li>Garlic</li>
            <li>Olive oil</li>
            <li>Dried oregano</li>
            <li>Salt</li>
            <li>Onion & chili flakes (optional)</li>
          </ul>
          <div className='btn-container'>
          <button className='btn-most'>How To make</button>
          <button className='btn-most'>Save</button>
          </div>
        </div>
      </div>
    
      <div className="card-light animated">
        <img src={tiramissu} alt=""  className='card-light_image'/>
        <div className="card-light_copy">
          <h3>Tiramisu :</h3>
          <p>Ingredient : <br />
          </p>
          <ul>
            <li>Canned tomatoes</li>
            <li>Garlic</li>
            <li>Olive oil</li>
            <li>Dried oregano</li>
            <li>Salt</li>
            <li>Onion & chili flakes (optional)</li>
          </ul>
          <div className='btn-container'>
          <button className='btn-most'>How To make</button>
          <button className='btn-most'>Save</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

