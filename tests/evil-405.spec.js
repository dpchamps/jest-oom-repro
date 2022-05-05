
  describe("some-evil-spec=405", () => {
    it("evil-block-405", () => {
      window.evil_405 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  