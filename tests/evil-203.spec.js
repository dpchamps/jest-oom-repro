
  describe("some-evil-spec=203", () => {
    it("evil-block-203", () => {
      window.evil_203 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  