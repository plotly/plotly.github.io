---
layout: tutorial-single_layout
title: Collaborate in Chart Studio
subtitle: How to collaborate on plots and grids in Chart Studio
permalink: /collaborate-in-plotly/
imageurl: ../static/images/collaboration-doc/collaborator-thumb.png
state: active
tags: fundamentals
order: 13
meta_description: A tutorial on how to collaborate on plots and grids in Chart Studio
popularity: featured
carouselimageurl:
actioncall: How to collaborate on plots and grids in Chart Studio
actioncall-url:

otherlang: Know how to program? Learn about [collaborating with our APIs](https://plot.ly/ipython-notebooks/collaboration/), including Python, R, and Matlab.

steps:
 - title: Introduction
   sub-steps:
    - copy: "Whether you're using Chart Studio to create graphs for school, business, or for fun, you can [share and export](http://help.plot.ly/save-share-and-export-in-plotly/) these graphs so your colleagues and friends can see your work. Additionally, you can add collaborators to your charts."
    - copy: "What's the difference between sharing and collaborating?"
    - copy: "Sharing is a way for people to view your plot, and you can do so publicly or with a secret link. For more information about sharing, click [here](http://help.plot.ly/how-sharing-works-in-plotly/). Collaborating is not only sharing your plot, you're giving your fellow collaborator the permission to edit it as well. It's a way for more than one user to work on the same plot."
    - copy: "Please note that the collaborators also need to [sign up](http://help.plot.ly/how-to-sign-up-to-plotly/) to Chart Studio if they don't already have an account."

 - title: Add Collaborators to a Plot
   sub-steps:
    - copy: "After you've [plotted](http://help.plot.ly/tutorials/#basic), [styled](http://help.plot.ly/style-your-plots/) and [saved](http://help.plot.ly/save-share-and-export-in-plotly/) your graph, you can start adding collaborators."
    - copy: "Click on the 'Share' button on the left-hand side of the [Chart Studio](https://plot.ly/create). When the 'Share' modal appears, click on the 'Collaborate' tab at the top. Enter the Chart Studio username or email address of the collaborators, and you can add a message if you wish. You can also add more than one collaborator, as seen below."
      img: "![Invite people](../static/images/collaboration-doc/add-collaborators.png)"
    - copy: "In addition to collaborating on the plot, collaborators can also [edit](http://help.plot.ly/add-data-to-the-plotly-grid/#step-5-update-your-data) the grid (data) associated with the plot. By default, the option 'Add Collaborators to Grids' is checked in. You can uncheck this option while adding collaborators, to restrict them from editing the grid. Please note that when the 'Add Collaborators to Grids' option is off, the collaborators can still edit the [style] (http://help.plot.ly/style-your-plots/) of your chart."
    - copy: "Also, if the 'Send Notification Email' option is checked, an email will be sent to the collaborator's email address (associated with their plotly account). Please note that if the collaborator is added by email but does not have a Chart Studio account, a [sign-up](https://plot.ly/accounts/login/?action=signup) link will be sent in the email. After signing up, they will be able to view and edit the plot."
      img: "![Disable grid](../static/images/collaboration-doc/disable-grid-collaboration.png)"
    - copy: "Once you've clicked 'Add', the collaborator's username or email address will appear under the 'Current Collaborators' field."
      img: "![Current collaborators](../static/images/collaboration-doc/current-collaborators.png)"
    - copy: "Another approach to add collaborators is by navigating to your ['Organize'](https://plot.ly/organize/home) page where the plots and data are stored. You can hover over the plot or grid thumbnails and then click the 'Share' icon."
      img: "![Share from Organize page](../static/images/collaboration-doc/share-from-files.png)"

 - title: Add Collaborators to a Grid
   sub-steps:
    - copy: "To add collaborators only to the grid (data) associated to a plot but not the plot itself, go to the ['Organize'](https://plot.ly/organize/home) page, then click on the 'Share' icon after hovering over the grid's thumbnail. The 'Share' modal will then look like as seen below. Choose the desired privacy options for the folder and then proceed with adding the collaborators in the 'Collaborate' tab."
      img: "![Grid Collaboration](../static/images/collaboration-doc/grid-collaboration.png)"

 - title: Add Collaborators to a Folder
   sub-steps:
    - copy: "In addition to adding collaborators to individual plots or grids, the owner can also add collaborators to folders containing various files. To do that, go to the ['Organize'](https://plot.ly/organize/home) page, then click on the 'Share' icon after hovering over the folder's thumbnail."
      img: "![Folder Thumbnail](../static/images/collaboration-doc/folder-thumbnail.png)"
    - copy: "The 'Share' modal will then look like as seen below. Choose the desired privacy options for the folder and then proceed with adding the collaborators in the 'Collaborate' tab."
      img: "![Folder Collaboration](../static/images/collaboration-doc/folder-collaboration.png)"
    - copy: "Please note that all files within that folder will be shared with the collaborators and also removing collaborators can then only be done at the folder level. So a shared folder cannot have files that are not shared."

 - title: Remove Collaborators
   sub-steps:
    - copy: "If you want to remove your collaborators, click on the 'x' next to their name. When you hover over the 'x', you'll see a little pop-up telling you to click to remove that user from being a collaborator."
      img: "![Remove Collaborator](../static/images/collaboration-doc/remove-collaborator.png)"

 - title: As a Collaborator
   sub-steps:
    - copy: "If the owner of the plot has opted to notify you by via email, you'll receive one, stating that they want to share a plot with you and wish to collaborate. You'll be given a link of where you can view the plot. You can then click on the 'Edit' icon on the top right corner to edit the plot."
      img: "![Edit](../static/images/collaboration-doc/collaborator-edit.png)"
    - copy: "Additionally, all shared plots and grids can be viewed on the ['Organize'](https://plot.ly/organize/home) page, by clicking on the 'Shared with me' tab on the left-hand side, as seen below."
      img: "![Shared Files](../static/images/collaboration-doc/share-with-me.png)"
    - copy: "The plot or grid can be viewed or edited by clicking on the 'View' or 'Edit' buttons that appear when hovering over file thumbnails."
      img: "![Hover thumbnail](../static/images/collaboration-doc/hover-thumbnail.gif)"
    - copy: "If you click on the 'Edit' button, you'll be taken to the [Chart Studio](https://plot.ly/create), and you'll be able to edit the file that was shared with you."
      img: "![Hover thumbnail](../static/images/collaboration-doc/collaborator-chart-studio.png)"
    - copy: "After making the necessary changes, save the plot and data by clicking on the 'Save' button on the left-hand side. Once your plot is saved, the owner of the files that were shared with you will be able to see your updates."
    - copy: "If the owner of the plot added you as a collaborator only for the plot but not the grid, you cannot edit the grid, however, you can make copies of the plot and the grid in order to play around with the data of the plot."
    - copy: "To make copies of the plot and the grid, go to the ['Shared with me'](https://plot.ly/organize/shared) page, hover over the plot thumbnail and click the 'Copy'icon."
      img: "![Copy Icon](../static/images/collaboration-doc/collaborator-copy-icon.png)"
    - copy: "A 'Copy file' modal will then appear. There are two ways of copying as seen below."
      img: "![Copy Modal](../static/images/collaboration-doc/collaborator-copy-modal.png)"
    - copy: " The option 'Linked to a cloned data set' creates your own copies of the plot and grid. Any changes made to the copied plot or grid, will not affect the original files shared with you."
    - copy: " The copied plot and grid can be found in the ['Organize'](https://plot.ly/organize/home) page."
      img: "![Copy Files](../static/images/collaboration-doc/collaborator-copied-files.png)"
    - copy: " The option 'Linked to the same data set' creates your own copy of the plot and links the grid of the plot to the original grid shared by the owner. Any changes made to the copied plot's grid will get reflected on the reference grid, and thus, the owner will be able to see those changes on the grid. But since you've loaded your own plot with a reference grid, you can add more grids to that plot. Please note that when saving the plot after making changes, the save modal will not allow you to change the name of the reference grid."
    - copy: " The copied plot and the reference grid can be found in the ['Organize'](https://plot.ly/organize/home) page."
      img: "![Copy Plot](../static/images/collaboration-doc/collaborator-copied-plot.png)"

 - title: Helpful Reminders
   sub-steps:
    - copy: "Collaborating on files with others, will allow them to change the original files."
    - copy: "When a plot, but not its grids is shared with a collaborator, a modal will notify the collaborator that their status is 'read only' on the grid if they try to edit it."
      img: "![No Grid](../static/images/collaboration-doc/collaborator-grid-restriction.png)"
    - copy: "Collaborators don't have access to adding more grids (data) to plots, change file names, file privacy options or add more collaborators. Only the owner can perform such actions."
    - copy: "If the owner of the plot has opted to save the plot or grid as private, no one will be able to view them, only the collaborators will be able to view or edit them."
      img: "![No Share](../static/images/collaboration-doc/collaborator-no-share.gif)"
    - copy: "For an easier way to keep your files organized, and to keep track of the plots and their associated grids, we highly recommend to save them with proper filenames."
---
