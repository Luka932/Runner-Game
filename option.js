export let jumpKey = 'Space';
export let duckKey = 'ShiftLeft';

export function changeControls() {
  const newJumpKey = document.getElementById("jumpKey").value;
  if (newJumpKey) {
    jumpKey = newJumpKey;
  }
  
  const newDuckKey = document.getElementById("duckKey").value;
  if (newDuckKey) {
    duckKey = newDuckKey;
  }
}