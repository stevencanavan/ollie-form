"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../lib/schema";
import Image from "next/image";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(UserSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log('Submitted user data:', data);
  };

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto md:min-h-screen md:items-center md:justify-center md:flex-row">
      <div className="flex w-full p-2 justify-center md:p-0 md:w-1/2 md:h-[600px] md:w-[400px]">
        <Image
          src="https://placehold.co/400x600.png"
          width={600}
          height={400}
          alt="placeholder"
        />
      </div>
      <form
        className="flex flex-col m-2 md:px-32 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Email</label>
        <input
          className="border"
          type="text"
          id="email"
          aria-required
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        <div className="min-h-5">
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <label htmlFor="password">Password</label>
        <input
          className="border"
          type="password"
          id="password"
          aria-required
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password")}
        />
        <div className="min-h-5">
          {errors.password && (
            <p
              id="password-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          className="border"
          type="password"
          id="confirm-password"
          aria-required
          aria-describedby={
            errors.confirmPassword ? "confirmPassword-error" : undefined
          }
          {...register("confirmPassword")}
        />
        <div className="min-h-5">
          {errors.confirmPassword && (
            <p
              id="confirmPassword-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <label htmlFor="pet-name">Pet Name</label>
        <input
          className="border"
          type="text"
          id="pet-name"
          aria-required
          aria-describedby={errors.petName ? "petName-error" : undefined}
          {...register("petName")}
        />
        <div className="min-h-5">
          {errors.petName && (
            <p
              id="petName-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.petName.message}
            </p>
          )}
        </div>
        <label htmlFor="pet-weight">Pet Weight</label>
        <input
          className="border"
          type="text"
          id="pet-weight"
          aria-required
          aria-describedby={errors.petWeight ? "petWeight-error" : undefined}
          {...register("petWeight")}
        />
        <div className="min-h-5">
          {errors.petWeight && (
            <p
              id="petWeight-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.petWeight.message}
            </p>
          )}
        </div>
        <label htmlFor="pet-ideal-weight">Pet Ideal Weight</label>
        <input
          className="border"
          type="text"
          id="pet-ideal-weight"
          aria-required={!!errors.petIdealWeight}
          aria-describedby={
            errors.petIdealWeight ? "petIdealWeight-error" : undefined
          }
          {...register("petIdealWeight")}
        />
        <div className="min-h-5">
          {errors.petIdealWeight && (
            <p
              id="petIdealWeight-error"
              role="alert"
              aria-live="polite"
              className="text-red-500 text-sm"
            >
              {errors.petIdealWeight.message}
            </p>
          )}
        </div>
        <button
          className="w-fit mx-auto p-4 mt-2 border rounded-md disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;