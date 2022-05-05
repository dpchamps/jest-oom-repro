
  describe("some-evil-spec=749", () => {
    it("evil-block-749", () => {
      window.evil_749 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  