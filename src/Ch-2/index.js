import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: '',
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  state = {
    loading: true,
    randomId: Math.floor(Math.random() * 9999),
  };

  reloadImage = () => {
    this.setState({
      loading: true,
      randomId: Math.floor(Math.random() * 9999),
    })
  };

  onImageLoaded = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const {
      title,
      description,
    } = this.props;

    const {
      randomId,
      loading,
    } = this.state;

    return (
      <div className="ex-2">
        <img
          src={`http://placecorgi.com/240/240?id=${randomId}`}
          alt={title}
          width={240}
          height={240}
          style={{
            display: loading ? 'none' : '',
          }}
          onLoad={this.onImageLoaded}
        />

        {
          loading && (
            <div className="loader" />
          )
        }

        <h1>{title}</h1>

        <p>{description}</p>

        <button onClick={this.reloadImage}>
          <i className="fa fa-sync" />
        </button>
      </div>
    );
  }
}

export default Card;
