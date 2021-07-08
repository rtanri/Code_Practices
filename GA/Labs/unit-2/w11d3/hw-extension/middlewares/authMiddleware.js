module.exports = {
  authenticatedOnly: (req, res, next) => {
    // if session is valid, go to next stage
    if (req.session && req.session.user) {
      next();
      return;
    }

    res.redirect("/users/login");
  },
  guestOnly: (req, res, next) => {
    //   if it's not logged-in, allow request to proceed
    if (!req.session || !req.session.user) {
      next();
      return;
    }
  },
  setUserVarMiddleware: (req, res, next) => {
    res.locals.user = null;
    if (req.session.user && req.session) {
      res.locals.user = req.session.user;
    }
    next();
  },
};
