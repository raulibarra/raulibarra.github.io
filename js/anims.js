function showGames(){
    scrollToDiv('portfolio');
    window.scrollBy(0, 30);
    toggleDiv("games-portfolio");
}

function showPersonal(){
    scrollToDiv('portfolio');
    window.scrollBy(0, 30);
    toggleDiv("personal_projects")
}

function scrollToTarget(element, offset = 0){
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function scrollToDiv(divId){
    let targetElement = document.getElementById(divId);
    if (targetElement == null){
        return;
    }

    scrollToTarget(targetElement);
}

function toggleDiv(divId){
    var targetElement = document.getElementById(divId);
    
    // force scroll to activate navBar update
    window.scrollBy(0, 1);
    
    if (!targetElement.hasAttribute("toggle-group"))
    {   // we can't toggle this item
        return false;
    }

    // get toggle group id
    const groupId = targetElement.getAttribute("toggle-group");

    // hide all elements that have this toggle group, by removing the "visible" class
    const elements = document.querySelectorAll(`[toggle-group="${groupId}"]`);
    if (elements == null || elements.length === 0)
    {
        // there are no elements to hide
        return false;
    }

    // iterate over each element and set their state
    elements.forEach(function(elementItem)
    {
        elementItem.classList.remove('visible');
        
        if (elementItem == targetElement)
        {   // make sure the item to show stays visible
            elementItem.classList.add('visible');
        }
    });

    return true;
}