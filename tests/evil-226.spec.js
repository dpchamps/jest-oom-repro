
  describe("some-evil-spec=226", () => {
    it("evil-block-226", () => {
      window.evil_226 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  