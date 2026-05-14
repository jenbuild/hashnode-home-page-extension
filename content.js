(() => {
  const clN = ["grid", "grid-cols-1", "gap-12", "lg\\:grid-cols-[1fr_320px]"]; // Classes to be removed or added based on the extension state
  const asideElement = document.querySelector("aside"); // Select the aside element that has the specified classes

  //   Check the extension state from storage and apply the necessary changes to the page
  chrome.storage.local.get("extensionEnabled", (result) => {
    if (result.extensionEnabled) {
      // Find the parent div of the aside element that has the specified classes and remove those classes
      const parentDiv = document.querySelector("section > div.gap-12.grid");
      parentDiv.classList.remove(...clN);
      //   Remove the max-width constraint from the first child of the parent div
      const children = parentDiv.children;
      children[0].classList.remove("max-w-2xl");
    } else {
      // Find the parent div of using the aside element
      const parentDiv = asideElement.parentElement;
      parentDiv.classList.add(...clN);
    }
  });
})();
