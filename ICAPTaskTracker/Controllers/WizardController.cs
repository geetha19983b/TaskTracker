using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ICAPTaskTracker.Controllers
{
    public class WizardController : Controller
    {
        // GET: Wizard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Wizard()
        {
            return View();
        }
    }
}