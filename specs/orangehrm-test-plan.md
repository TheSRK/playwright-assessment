# OrangeHRM Comprehensive Test Plan

## Application Overview

OrangeHRM is a comprehensive Human Resource Management system that provides modules for employee management, leave administration, recruitment, time tracking, performance management, and administrative functions. The system supports multiple user roles and includes features for managing employee information, recruitment workflows, leave applications, and organizational structure. The application features a dashboard, sidebar navigation, top navigation menus, data tables with filtering and search capabilities, and forms for various operations.

## Test Scenarios

### 1. Authentication & Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `tests/authentication/successful-login.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify the login page displays with Username and Password fields
  3. Enter 'Admin' in the Username field
  4. Enter 'admin123' in the Password field
  5. Click the Login button
  6. Wait for page to load and redirect to dashboard

**Expected Results:**
  - Login page loads successfully
  - Username and Password fields are visible and accepting input
  - Login button is clickable
  - User is authenticated and redirected to the dashboard
  - Dashboard displays with main content area, sidebar, and header

#### 1.2. Login with invalid credentials

**File:** `tests/authentication/invalid-login.spec.ts`

**Steps:**
  1. Navigate to the login page
  2. Enter 'InvalidUser' in the Username field
  3. Enter 'wrongpassword' in the Password field
  4. Click the Login button
  5. Wait for response message

**Expected Results:**
  - Error message is displayed indicating invalid credentials
  - User remains on the login page and is not authenticated

#### 1.3. Login with empty fields

**File:** `tests/authentication/empty-fields-login.spec.ts`

**Steps:**
  1. Navigate to the login page
  2. Leave both Username and Password fields empty
  3. Attempt to click the Login button

**Expected Results:**
  - Required field validation errors are displayed
  - Login button does not process the form submission
  - User remains on the login page

#### 1.4. Forgot Password link accessibility

**File:** `tests/authentication/forgot-password.spec.ts`

**Steps:**
  1. Navigate to the login page
  2. Verify the 'Forgot your password?' link is visible and clickable
  3. Click on the 'Forgot your password?' link

**Expected Results:**
  - 'Forgot your password?' link is displayed below the password field
  - Clicking the link navigates to password recovery page or displays relevant form

### 2. Dashboard

**Seed:** `tests/seed.spec.ts`

#### 2.1. Dashboard loads with all widgets

**File:** `tests/dashboard/dashboard-load.spec.ts`

**Steps:**
  1. Login with valid credentials (Admin/admin123)
  2. Verify the Dashboard page is loaded
  3. Check for presence of left sidebar with module links
  4. Check for presence of main content area with widgets
  5. Verify Time at Work widget displays
  6. Verify My Actions widget displays
  7. Verify Quick Launch section displays
  8. Verify Buzz Latest Posts section displays
  9. Verify Employees on Leave Today section displays

**Expected Results:**
  - Dashboard loads successfully after login
  - Sidebar displays all available modules: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Directory, Maintenance, Claim, Buzz
  - Main content displays Time at Work widget with user punch status
  - My Actions widget shows pending reviews and interviews count
  - Quick Launch section displays quick action buttons
  - Buzz section shows recent posts from employees
  - Employees on Leave section is visible with employee data

#### 2.2. Dashboard sidebar navigation

**File:** `tests/dashboard/sidebar-navigation.spec.ts`

**Steps:**
  1. Login to the system
  2. Click on each module link in the sidebar: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, Buzz
  3. Verify each module loads with appropriate content

**Expected Results:**
  - All sidebar module links are clickable and functional
  - Each module displays its respective content when clicked
  - Active module is visually highlighted in the sidebar

#### 2.3. Dashboard quick launch buttons

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Login to the system
  2. Verify quick launch buttons are visible: Assign Leave, Leave List, Timesheets, Apply Leave, My Leave, My Timesheet
  3. Click on each quick launch button
  4. Verify the appropriate page/module loads

**Expected Results:**
  - All quick launch buttons are displayed and clickable
  - Each button redirects to the correct module or functionality

### 3. PIM - Personal Information Management

**Seed:** `tests/seed.spec.ts`

#### 3.1. Employee list displays with pagination

**File:** `tests/pim/employee-list.spec.ts`

**Steps:**
  1. Login to the system
  2. Navigate to PIM module via sidebar
  3. Verify Employee Information page loads
  4. Check for table with columns: ID, First (& Middle) Name, Last Name, Job Title, Employment Status, Sub Unit, Supervisor
  5. Verify pagination controls at the bottom of the table
  6. Click on pagination buttons to navigate between pages

**Expected Results:**
  - Employee list displays 151 records found
  - Table shows employee data with all required columns
  - Pagination buttons (1, 2, 3, 4) are visible and functional
  - Each page displays appropriate records

#### 3.2. Filter employees by name

**File:** `tests/pim/filter-by-name.spec.ts`

**Steps:**
  1. Login and navigate to PIM module
  2. Enter an employee name in the 'Employee Name' search field (e.g., 'Alice')
  3. Click the Search button
  4. Verify filtered results display

**Expected Results:**
  - Search field accepts input and is functional
  - Search button filters the employee list by name
  - Filtered results show only matching employees

#### 3.3. Filter employees by employment status

**File:** `tests/pim/filter-by-status.spec.ts`

**Steps:**
  1. Login and navigate to PIM module
  2. Click the Employment Status dropdown
  3. Select a status from the available options
  4. Click the Search button

**Expected Results:**
  - Employment Status dropdown displays available status options
  - Search filters employees by selected employment status
  - Results display only employees with selected status

#### 3.4. Reset employee list filters

**File:** `tests/pim/reset-filters.spec.ts`

**Steps:**
  1. Login and navigate to PIM module
  2. Enter filter criteria (e.g., employee name)
  3. Click the Reset button
  4. Verify filters are cleared and full employee list is displayed

**Expected Results:**
  - Reset button clears all filter fields
  - Employee list displays all 151 records again
  - Search fields return to their default state

#### 3.5. Add new employee

**File:** `tests/pim/add-employee.spec.ts`

**Steps:**
  1. Login and navigate to PIM module
  2. Click the 'Add' button in the Employee Information section
  3. Verify the add employee form loads
  4. Fill in required fields (First Name, Last Name, Employee ID)
  5. Submit the form

**Expected Results:**
  - 'Add' button is visible and clickable
  - Add employee form displays with required fields
  - Form can be submitted with valid data
  - New employee is added to the employee list

#### 3.6. View employee details

**File:** `tests/pim/view-employee-details.spec.ts`

**Steps:**
  1. Login and navigate to PIM module
  2. Click on an employee row in the table (e.g., 'Alice Jane Smith')
  3. Verify employee details page loads
  4. Check for employee information sections

**Expected Results:**
  - Clicking an employee row navigates to employee details page
  - Employee details page displays complete information
  - Employee personal and professional details are visible

### 4. Admin Module

**Seed:** `tests/seed.spec.ts`

#### 4.1. System Users page displays

**File:** `tests/admin/system-users.spec.ts`

**Steps:**
  1. Login to the system
  2. Click on Admin module in the sidebar
  3. Verify System Users page loads
  4. Check for search filters: Username, User Role, Employee Name, Status
  5. Verify Add button is present
  6. Check user data table

**Expected Results:**
  - Admin module loads successfully
  - System Users page displays with search filters
  - User table is visible with user data
  - Add button is available for creating new users

#### 4.2. Navigate admin submodules

**File:** `tests/admin/admin-submodules.spec.ts`

**Steps:**
  1. Login and navigate to Admin module
  2. Verify top navigation shows: User Management, Job, Organization, Qualifications, Nationalities, Corporate Branding, Configuration
  3. Click on each submodule option

**Expected Results:**
  - All admin submodules are visible in the top navigation
  - Each submodule loads appropriate content when clicked
  - User can navigate between different admin sections

### 5. Leave Module

**Seed:** `tests/seed.spec.ts`

#### 5.1. Leave list displays with filters

**File:** `tests/leave/leave-list.spec.ts`

**Steps:**
  1. Login to the system
  2. Navigate to Leave module via sidebar
  3. Verify Leave List page loads
  4. Check for filter fields: From Date, To Date, Show Leave with Status, Leave Type, Employee Name, Sub Unit
  5. Verify data table with columns: Date, Employee Name, Leave Type, Leave Balance, Number of Days, Status, Comments
  6. Verify default date range is displayed (2026-01-01 to 2026-31-12)

**Expected Results:**
  - Leave List page loads with all filter options
  - Default date range is pre-populated
  - Status dropdown shows 'Pending Approval' as default selection
  - Leave data table displays with all required columns
  - 1 record is found by default

#### 5.2. Filter leave requests by date range

**File:** `tests/leave/filter-by-date.spec.ts`

**Steps:**
  1. Login and navigate to Leave module
  2. Modify the From Date to a custom date
  3. Modify the To Date to a custom date
  4. Click the Search button
  5. Verify filtered leave records display

**Expected Results:**
  - Date fields accept input (format: yyyy-dd-mm)
  - Search button filters leave requests by date range
  - Only leave requests within the selected range display

#### 5.3. Filter leave by type

**File:** `tests/leave/filter-by-type.spec.ts`

**Steps:**
  1. Login and navigate to Leave module
  2. Click the Leave Type dropdown
  3. Select a leave type (e.g., 'CAN - Personal')
  4. Click the Search button

**Expected Results:**
  - Leave Type dropdown displays available types
  - Search filters leave by selected type
  - Results show only leaves of selected type

#### 5.4. Apply leave workflow

**File:** `tests/leave/apply-leave.spec.ts`

**Steps:**
  1. Login to the system
  2. Navigate to Leave module
  3. Click on 'Apply' from the top navigation
  4. Verify leave application form loads
  5. Fill in leave details (From Date, To Date, Leave Type, Comments)
  6. Submit the form

**Expected Results:**
  - Apply button is accessible in the Leave module
  - Leave application form displays
  - Form accepts all required inputs
  - Leave application is submitted successfully

### 6. Recruitment Module

**Seed:** `tests/seed.spec.ts`

#### 6.1. Candidates list displays

**File:** `tests/recruitment/candidates-list.spec.ts`

**Steps:**
  1. Login to the system
  2. Navigate to Recruitment module via sidebar
  3. Verify Candidates page loads
  4. Check for filter fields: Job Title, Vacancy, Hiring Manager, Status, Candidate Name, Keywords, Date of Application, Method of Application
  5. Verify data table with columns: Vacancy, Candidate, Hiring Manager, Date of Application, Status
  6. Verify 62 records are found

**Expected Results:**
  - Candidates page loads with all filter options
  - Data table displays candidate information
  - 62 records found message is displayed
  - Table shows pagination controls

#### 6.2. Filter candidates by status

**File:** `tests/recruitment/filter-by-status.spec.ts`

**Steps:**
  1. Login and navigate to Recruitment module
  2. Click the Status dropdown filter
  3. Select a status (e.g., 'Shortlisted')
  4. Click the Search button
  5. Verify filtered results display only candidates with selected status

**Expected Results:**
  - Status dropdown displays available statuses
  - Search filters candidates by status
  - Results show only candidates with selected status

#### 6.3. Search candidates by name and keywords

**File:** `tests/recruitment/search-candidates.spec.ts`

**Steps:**
  1. Login and navigate to Recruitment module
  2. Enter a candidate name in the 'Candidate Name' field
  3. Enter keywords in the 'Keywords' field
  4. Click the Search button
  5. Verify filtered results display

**Expected Results:**
  - Candidate Name field accepts input with type hints
  - Keywords field accepts comma-separated keywords
  - Search filters candidates by name and keywords
  - Results display matching candidates

#### 6.4. Add new candidate

**File:** `tests/recruitment/add-candidate.spec.ts`

**Steps:**
  1. Login and navigate to Recruitment module
  2. Click the 'Add' button
  3. Verify candidate add form loads
  4. Fill in required fields (First Name, Last Name, Email, etc.)
  5. Select a Job Title and Vacancy
  6. Submit the form

**Expected Results:**
  - 'Add' button is visible and clickable
  - Candidate form displays all required fields
  - Form accepts candidate information
  - New candidate is added to the candidate list

### 7. User Profile & Settings

**Seed:** `tests/seed.spec.ts`

#### 7.1. Access user profile dropdown

**File:** `tests/profile/user-profile-dropdown.spec.ts`

**Steps:**
  1. Login to the system
  2. Locate the user profile button in the top right header
  3. Click on the profile picture or user name
  4. Verify dropdown menu displays with options

**Expected Results:**
  - User profile dropdown is accessible from the header
  - Dropdown displays user information and menu options
  - Menu options are clickable and functional

#### 7.2. Navigate to My Info

**File:** `tests/profile/my-info.spec.ts`

**Steps:**
  1. Login to the system
  2. Click on 'My Info' link in the sidebar
  3. Verify My Info page loads with user's personal details

**Expected Results:**
  - 'My Info' link is accessible from the sidebar
  - My Info page displays user's personal information
  - User can view and potentially edit their information

### 8. Navigation & UI

**Seed:** `tests/seed.spec.ts`

#### 8.1. Search functionality in sidebar

**File:** `tests/navigation/sidebar-search.spec.ts`

**Steps:**
  1. Login to the system
  2. Locate the search box in the sidebar
  3. Type a module name (e.g., 'Admin')
  4. Verify search filters the sidebar menu

**Expected Results:**
  - Search box is visible in the sidebar
  - Search field accepts input
  - Sidebar menu filters based on search query

#### 8.2. Upgrade link in header

**File:** `tests/navigation/upgrade-link.spec.ts`

**Steps:**
  1. Login to the system
  2. Verify the 'Upgrade' button is visible in the top header
  3. Click on the 'Upgrade' button
  4. Verify it navigates to upgrade page or external link

**Expected Results:**
  - 'Upgrade' button is visible in the header
  - Button is clickable and functional
  - Clicking opens upgrade information or external link

#### 8.3. Footer information and links

**File:** `tests/navigation/footer.spec.ts`

**Steps:**
  1. Navigate to any page in the application
  2. Scroll to the bottom to view footer
  3. Verify footer displays version (OrangeHRM OS 5.8) and copyright information
  4. Verify OrangeHRM, Inc link is present
  5. Click on the OrangeHRM link

**Expected Results:**
  - Footer displays version number and copyright notice
  - Footer shows '© 2005 - 2026 OrangeHRM, Inc. All rights reserved.'
  - OrangeHRM, Inc link is clickable and navigates to external site
