
  describe("some-evil-spec=42", () => {
    it("evil-block-42", () => {
      window.evil_42 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  