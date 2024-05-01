1. Line 9 will print 20
2. Line 13 will print 20 as well. This is because result is a var meaning that it can be accessed anywhere within the function, so line 13 can also access result and print 20.
3. Line 9 will print 20
4. Line 13 will cause an error. This is because result was defined as a let variable within the if block of the function. Because it is let it can only be accessed within the block that it was defined in. Therefore it will cause an error to try an access result in a different blovk.
5. The code returns an error. This is because line 7 attempts to change a const variable which prevents it from being reassigned.
6. The code returns an error for the same reason as question 5, but another cause for an error could be because const has the same scope as let. This means the const result variable is created in the if block and is attempted to be accessed outside of the if block causing an error.

