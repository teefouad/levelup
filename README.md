# Challenge 1

Create a simple component that renders a bell icon. The component should display notifications count as a badge over the icon. If the count is zero, the count badge should be hidden. If the count is more than 9, then the string '9+' should be displayed instead of the actual count.

```
<div className="ex-1">
  <i className="fa fa-bell" />
  <span>{count}</span>
</div>
```

# Challenge 2

Create a component that shows a random image of a dog. The card should display an image, a title and a description. While the image is loading, a loader spinner should be displayed. Provide a button that, when clicked, loads a new random image (use http://placecorgi.com, size 240 x 240).

```
<div className="ex-2">
  <img src="..." alt="..." />
  <div className="loader" />
  <h1>{title}</h1>
  <p>{description}</p>
  <button>
    <i className="fa fa-sync" />
  </button>
</div>
```

# Challenge 3

Create a simple counter component. There should be 3 buttons: Increase, Decrease and Reset. The counter should accept min and max values as props. The count value should be highlighted in red color if it is out of bounds
Bonus: Disable buttons for edge values
Bonus: Provide a step value as a component prop

```
<div className="ex-3">
  <p>{count}</p>

  <button>
    <i className="fa fa-minus" />
  </button>

  <button>
    <i className="fa fa-undo" />
  </button>

  <button>
    <i className="fa fa-plus" />
  </button>
</div>
```

# Challenge 4

Create a tabs component that renders a set of buttons. The component accepts tabs labels as an array of strings. The selected tab index can be provided as a prop. An onChange callback function can be provided as a prop. This callback function should be called whenever the selected tab changes. It accepts the active index as a single parameter

```
<ul className="ex-4">
  <li className="is-active">
    <button>{tabTitle}</button>
  </li>
  ...
</ul>
```

# Challenge 5

Create a timer component that has two modes: Clock and  Stopwatch. The component allows switching between the two modes using tabs. In the Clock mode, time is displayed in this format: HH:MM:SS am and is updated each second. In the Stopwatch mode, the timer shows hours, minutes, seconds and milli-seconds and allows resetting and taking time snapshots (laps) using buttons.

```
<div className="ex-5">
  <Tabs />
  <Clock />
  <Stopwatch />
</div>
```

### Clock

```
<h1>{time}</h1>
```

### Stopwatch

```
<div>
  <h1>{time}</h1>

  <button>Start</button>
  <button>Stop</button>
  <button>Lap</button>
  <button>Reset</button>

  <ol reversed>
    <li>{snapshot}</li>
    ...
  </ol>
</div>
```

# Challenge 6

Create a Todo component that displays a list of todos.  An item can be checked / unchecked by clicking it. An item may be deleted by clicking an x button on it. New items may be added to the list by typing in a text input and pressing Enter. Checked items may be cleared by clicking a 'Clear complete' button. If the user starts typing, the input field should auto-focus.

```
<div className="ex-6">
  <form>
    <input type="text" name="newItem" placeholder="Type here..." />
  </form>

  <ol>
    <li>
      <button>Incomplete item</button>
      <span>
        <i className="fa fa-trash" />
      </span>
    </li>
    <li>
      <button><s>Complete item</s></button>
      <span>
        <i className="fa fa-trash" />
      </span>
    </li>
    ...
  </ol>

  <button>
    Clear Complete
  </button>
</div>
```

# Challenge 7

Create a Modal component that accepts content  passed as children. The modal may be closed using an overlay (option passed as a prop). The modal may display a close button (option passed as a prop). The component must support nested modals.

```
<div className="ex-7">
  <div className="content">
    ...
    <button>
      <i className="fa fa-times" />
    </button>
  </div>

  <div className="overlay" />
</div>
```

### Parent

```
<div>
  <button>Open Modal</button>
  <Modal>
    <h3>Hello Modal!</h3>
    <p>
      This is a small modal.
    </p>
  </Modal>
</div>
```
