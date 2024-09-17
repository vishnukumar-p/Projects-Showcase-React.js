import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  ImageElement,
  Heading,
  ParaElement,
  ListContainer,
  ListItem,
  ImageElementTwo,
  HeadingTwo,
  AppContainer,
  Navbar,
  ImageLogo,
  SecondContainer,
  SelectElement,
  ButtonRetry,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
}

class ProjectsShowCase extends Component {
  state = {
    projectsList: '',
    selectOptionId: categoriesList[0].id,
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    const {selectOptionId} = this.state
    this.setState({apiStatus: apiConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${selectOptionId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updated = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({projectsList: updated, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div>
      <ImageElement
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <ParaElement>
        We cannot seem to find the page you are looking for
      </ParaElement>
      <ButtonRetry type="button" onClick={this.onClickRetry}>
        Retry
      </ButtonRetry>
    </div>
  )

  onClickRetry = () => {
    this.getProjects()
  }

  renderSuccess = () => {
    const {projectsList} = this.state
    return (
      <div>
        <ListContainer>
          {projectsList.map(each => (
            <ListItem key={each.id}>
              <ImageElementTwo src={each.imageUrl} alt={each.name} />
              <HeadingTwo>{each.name}</HeadingTwo>
            </ListItem>
          ))}
        </ListContainer>
      </div>
    )
  }

  onChangeSelect = event => {
    this.setState({selectOptionId: event.target.value}, this.getProjects)
  }

  renderTotal = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {selectOptionId} = this.state
    return (
      <AppContainer>
        <Navbar>
          <ImageLogo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </Navbar>
        <SecondContainer>
          <SelectElement value={selectOptionId} onChange={this.onChangeSelect}>
            {categoriesList.map(each => (
              <option value={each.id}>{each.displayText}</option>
            ))}
          </SelectElement>
          {this.renderTotal()}
        </SecondContainer>
      </AppContainer>
    )
  }
}
export default ProjectsShowCase
