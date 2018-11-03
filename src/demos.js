
class Text extends React.Component {
  componentWillUnmount() {
    // alert(this.props.children);

    console.log(this.props.children);
  }

  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}
class AboutPage extends React.Component {
  state = {
    activeTabIndex: 0,
  }

  render() {
    const {
      activeTabIndex,
    } = this.state;

    return (
      <>
        <Tabs
          tabs={['Javascript', 'PHP', 'Nodejs']}
          onTabClick={(index) => {
            this.setState({
              activeTabIndex: index,
            })
          }}
        />

        {
          activeTabIndex === 0 && (
            <Text>
              Info about JS
            </Text>
          )
        }

        {
          activeTabIndex === 1 && (
            <Text>
              Info about PHP
            </Text>
          )
        }

        {
          activeTabIndex === 2 && (
            <Text>
              Info about Nodejs
            </Text>
          )
        }
      </>
    )
  }
}

class Demo extends React.Component {
  state = {
    count: 0,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count <= 5;
  }

  startCounter = () => {
    this.interval = setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      count,
    } = this.state;

    return (
      <button onClick={this.startCounter}>
        Click {count}
      </button>
    );
  }
}

class DemoUser extends React.Component {
  state = {
    clicked: false,
  }

  render() {
    return (
      <>
        {!this.state.clicked && <Demo />}
        <button
          onClick={() => this.setState({
            clicked: true
          })}
        >Click to hide the button above</button>
      </>
    );
  }
}
