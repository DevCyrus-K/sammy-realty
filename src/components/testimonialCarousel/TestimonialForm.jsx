import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import TitleSection from "@/components/titleSection";

const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  rating: z.number().min(1).max(5).default(5),
  content: z.string().min(10, "Review must be at least 10 characters"),
});

const TestimonialForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      rating: 5,
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          status: "pending", // User testimonials are pending admin review
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "Failed to submit review");
        return;
      }

      toast.success("Thank you! Your review has been submitted for approval.");
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ltn__write-testimonial-area pt-90 pb-90">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <TitleSection
              sectionClasses="text-center mb-50"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Share Your Experience",
                title: "Write a Review",
              }}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="ltn__testimonial-form">
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="text-danger">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your full name"
                  {...register("name")}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email address"
                  {...register("email")}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="rating" className="form-label">
                  Rating <span className="text-danger">*</span>
                </label>
                <div className="d-flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        value={value}
                        {...register("rating", { valueAsNumber: true })}
                        className="me-1"
                      />
                      {Array(value).fill("⭐").join("")}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="content" className="form-label">
                  Your Review <span className="text-danger">*</span>
                </label>
                <textarea
                  id="content"
                  rows={6}
                  className={`form-control ${errors.content ? "is-invalid" : ""}`}
                  placeholder="Share your experience with Sammy Realty..."
                  {...register("content")}
                ></textarea>
                {errors.content && <div className="invalid-feedback">{errors.content.message}</div>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>

            <div className="ltn__testimonial-info mt-4 p-3 bg-light rounded">
              <p className="small text-muted">
                ℹ️ Your review will be visible on our website after admin approval.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialForm;
