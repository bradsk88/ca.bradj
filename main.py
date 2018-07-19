import webapp2

class AppHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('ok')

app = webapp2.WSGIApplication([
    ('/', AppHandler),
]) 
