
  describe("some-evil-spec=281", () => {
    it("evil-block-281", () => {
      window.evil_281 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  