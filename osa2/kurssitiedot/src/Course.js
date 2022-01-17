import React from "react"

const Course = (props) => {



    const course = props.course.map((content) => <div key={content.id}>
        <Header key={content.id} header={content.name}></Header>
        <Part key={content.id + 1} parts={content.parts}></Part>
        <Total total={content.parts} />
    </div>)
    return (
        <div>
            {course}
        </div>


    )

}

const Header = (props) => {
    return (
        <h1>
            {props.header}
        </h1>
    )
}
const Part = (props) => {
    console.log(props)
    let parts = props.parts.map(part => <p key={part.id}>
        {part.name}, Exercises: {part.exercises}
    </p>)

    return (
        <div>
            {parts}
        </div>

    )
}

const Total = (props) => {
    const reducer = props.total.reduce((sum, order) => {
        return sum + order.exercises
    }, 0)

    return <p>Total amount of exercises: {reducer}</p>
}

export default Course