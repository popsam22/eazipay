import { passwordCriteria } from "@/validations/password.validator";

const barColor = [
  "",
  "bg-golden-gate-bridge",
  "bg-mango",
  "bg-golden",
  "bg-shamrock",
];
const labelColor = [
  "",
  "text-golden-gate-bridge",
  "text-mango",
  "text-golden",
  "text-shamrock",
];
const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const results = passwordCriteria.map((c) => c.test(password));
  const score = results.filter(Boolean).length;

  if (!password) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex gap-1 flex-1">
          {passwordCriteria.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${i < score ? barColor[score] : "bg-azureish-white dark:bg-gray-600"}`}
            />
          ))}
        </div>
        <p className={`r7 shrink-0 ${labelColor[score]}`}>
          {strengthLabel[score]}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {passwordCriteria.map((c, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${results[i] ? "bg-shamrock" : "bg-silver-sand dark:bg-gray-500"}`}
            />
            <p className={`r7 ${results[i] ? "text-shamrock" : "text-silver-sand dark:text-gray-400"}`}>
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
