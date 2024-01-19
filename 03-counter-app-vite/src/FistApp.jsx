import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola mundo',
//   title: 'Santiago'
// };


const FistApp = ({title, subTitle, name}) => {
  return (
    <>
      <h1 data-testid={"test-title"}>{title}</h1>
      {/* <h1> { JSON.stringify(newMessage) } </h1> */}
      <p> {subTitle} </p>
      <p> {subTitle} </p>
      <p> {name} </p>
    </>
  )
}

FistApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string
};

FistApp.defaultProps = {
  name: "Santiago",
  subTitle: 'No Hay Subtitulo',
}

export default FistApp
