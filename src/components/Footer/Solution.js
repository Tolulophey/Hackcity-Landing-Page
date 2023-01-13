import React from 'react'

function Solution() {
  const solutions = [
    {
      name: "Marketing",
      link: "/"
    },
    {
      name: "Analytics",
      link: "/"
    },
    {
      name: "Commerce",
      link: "/"
    },
    {
      name: "Insights",
      link: "/"
    }
  ]
  return (
    <div className="solutions">
        <h3>solutions</h3>
        <ul className="links">
            {solutions.map((solution, index)=>{
            return (
                <a href={solution.link} key={index+1}>
                <li>{solution.name}</li>
                </a>
            )
            })}
        </ul>
    </div>
  )
}

export default Solution