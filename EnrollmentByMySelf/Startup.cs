using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EnrollmentByMySelf.Startup))]
namespace EnrollmentByMySelf
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
