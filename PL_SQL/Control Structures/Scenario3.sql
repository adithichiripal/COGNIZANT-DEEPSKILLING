SET SERVEROUTPUT ON;

DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan.CustomerID
            || ' has Loan '
            || loan.LoanID
            || ' due on '
            || loan.DueDate
        );
    END LOOP;
END;
/
