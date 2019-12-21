# Create new page UI and integration to business layer #US69

As a user, I want to be able to create a new page by cloning an existing page so
that I do not have to build from a blank template each time I’m only making
content changes.

**ASSIGNEE:** John Doe

**REPORTER:** Mike Goddard

**TIME ESTIMATE (HH:MM):** 10:00

**DUE DATE:** 22nd Dec 2019

**PERCENTAGE COMPLETE:** 0%

**DEPENDENCIES:** Jay Mukharjee

**PRIORITY:** HIGH

**REQUIREMENTS:**

1. User can click the “Make a copy” option in the child page menu to clone a
   page.
2. User is prompted through a model to provide details for the new page
   including.
3. When use clicks “make a copy” they are automatically taken to the Page Editor
   so they can begin editing their page.
4. The new page will automatically appear under the parent page in the Pages
   list view after it’s created. It will default to “draft” status.

**ACCEPTANCE CRITERIA:**

1. Meets accessibility guidelines and can be navigated with a screen reader.
2. User can access and click the “make a copy” option from every page version
   (child page).
3. User is presented with form through a modal to provide details for their new
   page copy.
4. user can cancel out of the form.
5. User can submit the form and create a new page.
6. Works across Chrome, Safari, Edge.

**FORM VALIDATION:**

1. field companyName - minLength: 3 char, maxLength: 120 char and it's required
2. field email - should be valid, unique and it's required
3. field password - minLength: 6 char, maxLength: 120 char and it's required.

**REFERENCES:**

1. web page design
   (https://app.zeplin.io/project/768876cb-a252-4899-a835-808f01487460/screen/8e508f65-6e1f-46f4-a379-5460c45c4a20)

**NOTES:**

1. Need to finish design first then start working on this feature.
