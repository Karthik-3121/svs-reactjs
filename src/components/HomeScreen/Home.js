import React, { useState } from 'react';
import { recognition } from '../../api/VoiceSearchAPI';
import Header from './Header';
import Footer from './Footer';
import logo from './els-logo.svg';
import './Home.css';
import VoiceSearchBox from './VoiceSearchBox';

const Home = ({ setSearch }) => {
  //controlling form
  const [term, setTerm] = useState('');

  //voice search
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);
  //voice text
  const [voiceText, setVoiceText] = useState('');

  // clear term by clicking on cross
  const clearTerm = () => {
    setTerm('');
  };

  // submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  // handle search
  const handleSearch = () => {
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  // clear voice search
  const clearVoiceSearch = () => {
    setIsVoiceSearch(false);
    recognition.stop();
  };
  // open voice search
  const openVoiceSearch = () => {
    setIsVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      setVoiceText(voiceText + transcript);
      setTerm(voiceText + transcript);
      setSearch(voiceText + transcript);
    };
  };

  return (
    <>
      {isVoiceSearch ? (
        <VoiceSearchBox
          voiceText={voiceText}
          clearVoiceSearch={clearVoiceSearch}
          openVoiceSearch={openVoiceSearch}
        />
      ) : null}
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
            <img
              src={logo}
              alt="Elsevier Logo"
              height={50}
              className="els-logo"
            />
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="30" width="72" viewBox="0 0 72 30" fill="#f36d21" focusable="false">
              <title>Scopus</title>
              <g>
                <path className="a" d="M4.23,21a9.79,9.79,0,0,1-4.06-.83l.29-2.08a7.17,7.17,0,0,0,3.72,1.09c2.13,0,3-1.22,3-2.39C7.22,13.85.3,13.43.3,9c0-2.37,1.56-4.29,5.2-4.29a9.12,9.12,0,0,1,3.77.75l-.1,2.08a7.58,7.58,0,0,0-3.67-1c-2.24,0-2.91,1.22-2.91,2.39,0,3,6.92,3.61,6.92,7.8C9.5,19.1,7.58,21,4.23,21Z" />
                <path className="a" d="M20.66,20A6.83,6.83,0,0,1,16.76,21c-3,0-5.23-2.18-5.23-6.29,0-4.29,2.91-6.11,5.28-6.11,2.16,0,3.67.55,3.85,2.11,0,.23,0,.57,0,.86H18.81c0-1-.55-1.25-1.9-1.25a2.87,2.87,0,0,0-1.35.21c-.21.13-1.85.94-1.85,4.11s1.9,4.65,3.59,4.65a5.91,5.91,0,0,0,3.2-1.2Z" />
                <path className="a" d="M27.29,21c-3.28,0-5.46-2.44-5.46-6.19,0-3.46,2-6.21,5.75-6.21,3.3,0,5.49,2.37,5.49,6.21C33.06,18.5,30.85,21,27.29,21Zm0-10.69a3.3,3.3,0,0,0-2,.65A5.82,5.82,0,0,0,24,14.73c0,3.75,2,4.6,3.56,4.6a3.45,3.45,0,0,0,2-.65A5.53,5.53,0,0,0,30.9,15C30.9,12.86,30.2,10.36,27.31,10.36Z" />
                <path className="a" d="M40.37,21a5.63,5.63,0,0,1-2.6-.57v5.46h-2V12.23c0-.91-.05-1.72-.1-2.31l-.1-1H37.4l.31,1.74a4.86,4.86,0,0,1,4-2.05c2.39,0,4.26,1.56,4.26,5.72S43.69,21,40.37,21Zm.91-10.61a4.46,4.46,0,0,0-1.56.31,11.57,11.57,0,0,0-2,2.11v5.8a4.35,4.35,0,0,0,.7.34,4.12,4.12,0,0,0,1.61.34c2.57,0,3.74-1.9,3.74-4.73C43.82,12.94,43.51,10.44,41.27,10.44Z" />
                <path className="a" d="M58.36,20.74H56.54L56.22,19a4.06,4.06,0,0,1-3.85,2.05c-2.08,0-3.77-.86-3.77-3.87V9h2V15.8c0,1.92.16,3.54,2,3.54a4.47,4.47,0,0,0,2-.47,6.77,6.77,0,0,0,1.64-2.08V9h2v8.53a19,19,0,0,0,.1,2.31Z" />
                <path className="a" d="M64.86,21.07a6.87,6.87,0,0,1-3.67-1l.23-1.87a5.54,5.54,0,0,0,3.28,1.2c1.66,0,2.44-.75,2.44-1.66,0-2.39-5.88-2.26-5.88-5.9,0-1.77,1.38-3.22,4.21-3.22a6.59,6.59,0,0,1,3.38.88l-.21,1.87a4.67,4.67,0,0,0-3.15-1.14c-1.33,0-2.24.52-2.24,1.46,0,2.37,5.88,2.16,5.88,5.9C69.15,19.36,67.85,21.07,64.86,21.07Z" />
              </g>
            </svg>
            <svg width="150" height="25" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
              <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#F36D21" strokeWidth="1.5px" fill="#F36D21">
                <path d="M 0.691 0.938 L 6.422 16.336 L 6.762 17.367 L 7.102 16.336 L 12.832 0.938 L 13.523 0.938 L 7.148 18 L 6.375 18 L 0 0.938 L 0.691 0.938 Z" id="0"/>
                <path d="M 14.438 11.977 L 14.438 11.414 A 8.128 8.128 0 0 1 14.652 9.513 A 6.766 6.766 0 0 1 15.135 8.15 A 5.56 5.56 0 0 1 16.314 6.51 A 5.193 5.193 0 0 1 17.104 5.895 A 5.204 5.204 0 0 1 19.781 5.089 A 6.254 6.254 0 0 1 19.98 5.086 A 5.54 5.54 0 0 1 21.888 5.408 A 5.12 5.12 0 0 1 22.84 5.871 A 5.23 5.23 0 0 1 24.674 7.828 A 6.347 6.347 0 0 1 24.814 8.098 A 7.037 7.037 0 0 1 25.486 10.462 A 8.669 8.669 0 0 1 25.535 11.344 L 25.535 11.906 A 8.287 8.287 0 0 1 25.34 13.739 A 6.759 6.759 0 0 1 24.844 15.176 A 5.494 5.494 0 0 1 23.619 16.859 A 5.197 5.197 0 0 1 22.881 17.426 A 5.204 5.204 0 0 1 20.203 18.231 A 6.254 6.254 0 0 1 20.004 18.234 Q 18.398 18.234 17.127 17.438 A 5.294 5.294 0 0 1 15.242 15.382 A 6.339 6.339 0 0 1 15.152 15.205 A 7.029 7.029 0 0 1 14.487 12.851 A 8.637 8.637 0 0 1 14.437 11.977 Z M 15.07 11.531 L 15.07 11.906 A 6.944 6.944 0 0 0 15.36 13.935 A 6.27 6.27 0 0 0 15.697 14.807 A 5.249 5.249 0 0 0 16.615 16.168 A 4.673 4.673 0 0 0 17.443 16.863 Q 18.563 17.602 20.004 17.602 A 4.687 4.687 0 0 0 21.86 17.244 A 4.46 4.46 0 0 0 23.537 15.973 A 5.712 5.712 0 0 0 24.748 13.396 A 8.102 8.102 0 0 0 24.902 11.777 L 24.902 11.414 A 6.709 6.709 0 0 0 24.493 9.057 A 6.355 6.355 0 0 0 24.27 8.531 A 5.342 5.342 0 0 0 23.354 7.171 A 4.73 4.73 0 0 0 22.518 6.463 A 4.469 4.469 0 0 0 20.025 5.719 A 5.38 5.38 0 0 0 19.98 5.719 A 4.617 4.617 0 0 0 18.067 6.106 A 4.506 4.506 0 0 0 16.441 7.371 A 5.872 5.872 0 0 0 15.173 10.224 A 8.032 8.032 0 0 0 15.07 11.531 Z" id="1"/>
                <path d="M 29.391 5.32 L 29.391 18 L 28.758 18 L 28.758 5.32 L 29.391 5.32 Z M 28.43 1.359 Q 28.43 1.09 28.617 0.896 A 0.611 0.611 0 0 1 29.057 0.703 A 0.741 0.741 0 0 1 29.074 0.703 Q 29.344 0.703 29.537 0.896 A 0.646 0.646 0 0 1 29.7 1.157 A 0.657 0.657 0 0 1 29.73 1.359 A 0.611 0.611 0 0 1 29.549 1.805 A 0.74 0.74 0 0 1 29.537 1.816 Q 29.344 2.004 29.074 2.004 A 0.638 0.638 0 0 1 28.784 1.938 A 0.644 0.644 0 0 1 28.617 1.816 A 0.621 0.621 0 0 1 28.43 1.368 A 0.766 0.766 0 0 1 28.43 1.359 Z" id="2"/>
                <path d="M 41.918 14.156 L 42.551 14.156 Q 42.457 15.996 41.133 17.115 A 4.699 4.699 0 0 1 38.62 18.188 A 6.23 6.23 0 0 1 37.852 18.234 A 5.287 5.287 0 0 1 36.08 17.95 A 4.477 4.477 0 0 1 34.072 16.512 Q 32.836 14.991 32.691 12.513 A 11.578 11.578 0 0 1 32.672 11.836 L 32.672 11.414 A 9.626 9.626 0 0 1 32.851 9.502 Q 33.082 8.362 33.612 7.469 A 5.484 5.484 0 0 1 34.072 6.809 A 4.515 4.515 0 0 1 37.377 5.102 A 6.08 6.08 0 0 1 37.828 5.086 A 5.526 5.526 0 0 1 39.404 5.301 A 4.402 4.402 0 0 1 41.156 6.293 A 4.245 4.245 0 0 1 42.486 8.839 A 5.813 5.813 0 0 1 42.551 9.504 L 41.918 9.504 A 4.484 4.484 0 0 0 41.668 8.191 A 3.592 3.592 0 0 0 40.717 6.756 Q 39.598 5.719 37.828 5.719 A 4.717 4.717 0 0 0 36.339 5.943 A 3.82 3.82 0 0 0 34.506 7.248 A 5.168 5.168 0 0 0 33.634 8.976 Q 33.413 9.713 33.34 10.597 A 10.998 10.998 0 0 0 33.305 11.496 L 33.305 11.906 A 9.423 9.423 0 0 0 33.442 13.565 Q 33.606 14.486 33.97 15.22 A 4.767 4.767 0 0 0 34.518 16.084 A 3.94 3.94 0 0 0 37.398 17.583 A 5.537 5.537 0 0 0 37.852 17.602 A 5.326 5.326 0 0 0 39.149 17.451 A 3.909 3.909 0 0 0 40.693 16.687 A 3.272 3.272 0 0 0 41.86 14.644 A 4.547 4.547 0 0 0 41.918 14.156 Z" id="3"/>
                <path d="M 44.73 11.941 L 44.73 11.414 A 7.643 7.643 0 0 1 45.061 9.142 A 6.927 6.927 0 0 1 45.434 8.191 A 5.972 5.972 0 0 1 46.421 6.715 A 5.224 5.224 0 0 1 47.367 5.906 A 4.741 4.741 0 0 1 50.051 5.086 A 4.849 4.849 0 0 1 51.814 5.396 A 4.388 4.388 0 0 1 53.52 6.598 A 5.182 5.182 0 0 1 54.715 9.024 A 7.472 7.472 0 0 1 54.867 10.57 L 54.867 11.238 L 45.363 11.238 L 45.363 11.93 Q 45.363 13.477 46.014 14.795 A 5.358 5.358 0 0 0 47.049 16.251 A 4.902 4.902 0 0 0 47.807 16.863 Q 48.949 17.613 50.285 17.613 A 6.379 6.379 0 0 0 51.26 17.543 Q 51.8 17.459 52.252 17.276 A 3.692 3.692 0 0 0 52.459 17.186 A 4.189 4.189 0 0 0 53.642 16.332 A 5.235 5.235 0 0 0 54.047 15.867 L 54.492 16.184 A 4.596 4.596 0 0 1 51.123 18.184 A 6.786 6.786 0 0 1 50.285 18.234 A 5.101 5.101 0 0 1 47.467 17.408 A 5.647 5.647 0 0 1 45.503 15.23 A 6.675 6.675 0 0 1 45.457 15.141 A 6.849 6.849 0 0 1 44.748 12.483 A 8.167 8.167 0 0 1 44.73 11.941 Z M 45.398 10.605 L 54.234 10.605 L 54.234 10.453 A 5.354 5.354 0 0 0 53.689 8.057 A 4.451 4.451 0 0 0 52.885 6.902 A 3.982 3.982 0 0 0 52.189 6.334 A 3.865 3.865 0 0 0 50.051 5.719 A 4.12 4.12 0 0 0 47.032 6.97 A 5.146 5.146 0 0 0 46.91 7.096 A 5.583 5.583 0 0 0 45.554 9.678 A 7.329 7.329 0 0 0 45.398 10.605 Z" id="4"/>
                <path d="M 74.566 5.742 L 73.934 5.742 A 4.233 4.233 0 0 0 73.571 3.973 A 4.137 4.137 0 0 0 72.527 2.584 A 4.858 4.858 0 0 0 70.146 1.447 A 6.853 6.853 0 0 0 68.883 1.336 A 8.259 8.259 0 0 0 67.377 1.465 Q 66.503 1.628 65.804 1.993 A 4.58 4.58 0 0 0 65.244 2.338 A 3.803 3.803 0 0 0 64.454 3.087 A 2.805 2.805 0 0 0 63.855 4.852 Q 63.855 6.361 65.023 7.293 A 3.818 3.818 0 0 0 65.062 7.324 A 5.72 5.72 0 0 0 65.944 7.875 Q 66.898 8.369 68.356 8.793 A 24.646 24.646 0 0 0 69.047 8.982 A 22.429 22.429 0 0 1 70.491 9.406 Q 71.904 9.876 72.782 10.428 A 5.415 5.415 0 0 1 73.113 10.652 A 4.075 4.075 0 0 1 74.249 11.89 Q 74.754 12.762 74.754 13.887 A 3.752 3.752 0 0 1 74.027 16.166 Q 73.301 17.156 71.965 17.695 A 7.38 7.38 0 0 1 70.07 18.171 A 9.316 9.316 0 0 1 68.965 18.234 A 9.582 9.582 0 0 1 67.103 18.061 A 7.675 7.675 0 0 1 65.637 17.619 A 5.599 5.599 0 0 1 64.485 16.981 A 4.268 4.268 0 0 1 63.416 15.867 Q 62.672 14.73 62.672 13.184 L 63.305 13.184 A 4.47 4.47 0 0 0 63.535 14.652 A 3.692 3.692 0 0 0 64.875 16.441 A 5.646 5.646 0 0 0 66.876 17.363 Q 67.675 17.564 68.613 17.596 A 10.516 10.516 0 0 0 68.965 17.602 A 8.024 8.024 0 0 0 70.59 17.446 Q 71.769 17.202 72.656 16.576 A 3.749 3.749 0 0 0 73.527 15.74 A 3.008 3.008 0 0 0 74.109 13.91 A 3.874 3.874 0 0 0 74.015 13.035 A 2.88 2.88 0 0 0 73.6 12.064 Q 73.167 11.423 72.313 10.908 A 6.608 6.608 0 0 0 71.994 10.729 Q 71.079 10.244 69.383 9.739 A 34.861 34.861 0 0 0 68.684 9.539 A 27.919 27.919 0 0 1 67.466 9.176 Q 66.14 8.745 65.361 8.309 A 5.754 5.754 0 0 1 64.586 7.793 Q 64.186 7.474 63.909 7.113 A 3.213 3.213 0 0 1 63.738 6.867 A 3.29 3.29 0 0 1 63.297 5.713 A 4.528 4.528 0 0 1 63.223 4.875 A 3.51 3.51 0 0 1 64.404 2.177 A 4.657 4.657 0 0 1 64.793 1.857 Q 66.363 0.703 68.883 0.703 A 7.235 7.235 0 0 1 70.611 0.902 A 6.047 6.047 0 0 1 71.83 1.342 A 4.997 4.997 0 0 1 73.254 2.364 A 4.61 4.61 0 0 1 73.852 3.135 A 4.805 4.805 0 0 1 74.563 5.539 A 5.784 5.784 0 0 1 74.566 5.742 Z" id="6"/>
                <path d="M 76.758 11.941 L 76.758 11.414 A 7.643 7.643 0 0 1 77.088 9.142 A 6.927 6.927 0 0 1 77.461 8.191 A 5.972 5.972 0 0 1 78.448 6.715 A 5.224 5.224 0 0 1 79.395 5.906 A 4.741 4.741 0 0 1 82.078 5.086 A 4.849 4.849 0 0 1 83.842 5.396 A 4.388 4.388 0 0 1 85.547 6.598 A 5.182 5.182 0 0 1 86.742 9.024 A 7.472 7.472 0 0 1 86.895 10.57 L 86.895 11.238 L 77.391 11.238 L 77.391 11.93 Q 77.391 13.477 78.041 14.795 A 5.358 5.358 0 0 0 79.076 16.251 A 4.902 4.902 0 0 0 79.834 16.863 Q 80.977 17.613 82.313 17.613 A 6.379 6.379 0 0 0 83.287 17.543 Q 83.828 17.459 84.28 17.276 A 3.692 3.692 0 0 0 84.486 17.186 A 4.189 4.189 0 0 0 85.669 16.332 A 5.235 5.235 0 0 0 86.074 15.867 L 86.52 16.184 A 4.596 4.596 0 0 1 83.151 18.184 A 6.786 6.786 0 0 1 82.313 18.234 A 5.101 5.101 0 0 1 79.494 17.408 A 5.647 5.647 0 0 1 77.53 15.23 A 6.675 6.675 0 0 1 77.484 15.141 A 6.849 6.849 0 0 1 76.776 12.483 A 8.167 8.167 0 0 1 76.758 11.941 Z M 77.426 10.605 L 86.262 10.605 L 86.262 10.453 A 5.354 5.354 0 0 0 85.717 8.057 A 4.451 4.451 0 0 0 84.913 6.902 A 3.982 3.982 0 0 0 84.217 6.334 A 3.865 3.865 0 0 0 82.078 5.719 A 4.12 4.12 0 0 0 79.06 6.97 A 5.146 5.146 0 0 0 78.937 7.096 A 5.583 5.583 0 0 0 77.581 9.678 A 7.329 7.329 0 0 0 77.426 10.605 Z" id="7"/>
                <path d="M 98.766 18 L 98.039 18 A 4.672 4.672 0 0 1 97.915 17.426 Q 97.82 16.818 97.807 15.965 A 18.214 18.214 0 0 1 97.805 15.68 A 5.086 5.086 0 0 1 95.754 17.566 A 6.063 6.063 0 0 1 93.612 18.193 A 7.484 7.484 0 0 1 92.812 18.234 A 5.258 5.258 0 0 1 91.591 18.1 A 3.645 3.645 0 0 1 89.982 17.279 A 3.141 3.141 0 0 1 88.914 14.98 A 4.244 4.244 0 0 1 88.91 14.789 A 3.107 3.107 0 0 1 89.991 12.375 A 4.37 4.37 0 0 1 90.486 11.994 Q 91.801 11.119 93.837 10.958 A 11.972 11.972 0 0 1 94.676 10.922 L 97.805 10.922 L 97.805 9.07 A 4.061 4.061 0 0 0 97.681 8.038 A 2.821 2.821 0 0 0 96.803 6.598 A 3.264 3.264 0 0 0 95.608 5.945 Q 95.116 5.791 94.521 5.742 A 7.06 7.06 0 0 0 93.938 5.719 A 5.572 5.572 0 0 0 92.588 5.874 A 4.155 4.155 0 0 0 91.043 6.609 A 3.278 3.278 0 0 0 90.347 7.32 A 2.535 2.535 0 0 0 89.883 8.812 L 89.25 8.789 A 3.132 3.132 0 0 1 90.249 6.481 A 4.529 4.529 0 0 1 90.609 6.164 A 4.948 4.948 0 0 1 93.105 5.138 A 6.527 6.527 0 0 1 93.938 5.086 Q 95.988 5.086 97.195 6.111 A 3.432 3.432 0 0 1 98.352 8.147 A 5.024 5.024 0 0 1 98.437 9 L 98.438 15.059 A 20.967 20.967 0 0 0 98.456 15.963 Q 98.514 17.32 98.766 17.895 L 98.766 18 Z M 97.805 14.578 L 97.805 11.566 L 94.875 11.566 A 10.996 10.996 0 0 0 93.31 11.67 Q 91.709 11.901 90.715 12.645 A 3.259 3.259 0 0 0 90.024 13.332 A 2.497 2.497 0 0 0 89.543 14.836 A 2.49 2.49 0 0 0 90.343 16.689 A 3.326 3.326 0 0 0 90.469 16.805 A 3.237 3.237 0 0 0 92.155 17.566 A 4.411 4.411 0 0 0 92.812 17.613 A 6.676 6.676 0 0 0 94.324 17.45 A 5.109 5.109 0 0 0 95.877 16.816 A 4.936 4.936 0 0 0 97.805 14.578 Z" id="8"/>
                <path d="M 108.176 5.215 L 108.105 5.777 L 107.285 5.707 A 4.107 4.107 0 0 0 105.864 5.945 A 3.647 3.647 0 0 0 104.578 6.756 A 4.487 4.487 0 0 0 103.579 8.225 Q 103.294 8.881 103.148 9.691 L 103.148 18 L 102.516 18 L 102.516 5.32 L 103.148 5.32 L 103.148 7.957 A 5.046 5.046 0 0 1 103.879 6.657 A 4.375 4.375 0 0 1 104.695 5.859 A 3.778 3.778 0 0 1 106.233 5.186 A 5.284 5.284 0 0 1 107.285 5.086 Q 107.666 5.086 107.946 5.148 A 1.646 1.646 0 0 1 108.176 5.215 Z" id="9"/>
                <path d="M 118.688 14.156 L 119.32 14.156 Q 119.227 15.996 117.902 17.115 A 4.699 4.699 0 0 1 115.39 18.188 A 6.23 6.23 0 0 1 114.621 18.234 A 5.287 5.287 0 0 1 112.85 17.95 A 4.477 4.477 0 0 1 110.842 16.512 Q 109.606 14.991 109.461 12.513 A 11.578 11.578 0 0 1 109.441 11.836 L 109.441 11.414 A 9.626 9.626 0 0 1 109.62 9.502 Q 109.851 8.362 110.381 7.469 A 5.484 5.484 0 0 1 110.842 6.809 A 4.515 4.515 0 0 1 114.147 5.102 A 6.08 6.08 0 0 1 114.598 5.086 A 5.526 5.526 0 0 1 116.173 5.301 A 4.402 4.402 0 0 1 117.926 6.293 A 4.245 4.245 0 0 1 119.256 8.839 A 5.813 5.813 0 0 1 119.32 9.504 L 118.688 9.504 A 4.484 4.484 0 0 0 118.438 8.191 A 3.592 3.592 0 0 0 117.486 6.756 Q 116.367 5.719 114.598 5.719 A 4.717 4.717 0 0 0 113.109 5.943 A 3.82 3.82 0 0 0 111.275 7.248 A 5.168 5.168 0 0 0 110.403 8.976 Q 110.182 9.713 110.11 10.597 A 10.998 10.998 0 0 0 110.074 11.496 L 110.074 11.906 A 9.423 9.423 0 0 0 110.211 13.565 Q 110.376 14.486 110.739 15.22 A 4.767 4.767 0 0 0 111.287 16.084 A 3.94 3.94 0 0 0 114.168 17.583 A 5.537 5.537 0 0 0 114.621 17.602 A 5.326 5.326 0 0 0 115.918 17.451 A 3.909 3.909 0 0 0 117.463 16.687 A 3.272 3.272 0 0 0 118.63 14.644 A 4.547 4.547 0 0 0 118.687 14.156 Z" id="10"/>
                <path d="M 123.129 0 L 123.129 8.273 A 5.609 5.609 0 0 1 124.088 6.722 A 5.049 5.049 0 0 1 124.957 5.941 Q 126.164 5.086 127.629 5.086 Q 129.073 5.086 129.991 5.665 A 2.94 2.94 0 0 1 130.658 6.24 A 3.642 3.642 0 0 1 131.32 7.424 Q 131.507 7.961 131.592 8.622 A 9.115 9.115 0 0 1 131.66 9.727 L 131.66 18 L 131.027 18 L 131.027 9.703 Q 131.016 7.664 130.195 6.686 A 2.536 2.536 0 0 0 129.032 5.915 Q 128.415 5.707 127.594 5.707 A 3.943 3.943 0 0 0 124.752 6.873 A 5.66 5.66 0 0 0 123.36 9.08 A 7.207 7.207 0 0 0 123.129 9.879 L 123.129 18 L 122.496 18 L 122.496 0 L 123.129 0 Z" id="11"/>
              </g>
            </svg>
            <div className="search-box col-md-7 border d-flex py-2 justify-content-between align-items-center">
              <i className="fa fa-search" onClick={() => handleSearch()}></i>
              <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </form>
              {term ? (
                <i className="fa fa-close" onClick={() => clearTerm()}></i>
              ) : (
                ''
              )}
              <i
                className="fa fa-microphone"
                onClick={() => openVoiceSearch()}></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
