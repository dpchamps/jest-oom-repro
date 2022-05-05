
  describe("some-evil-spec=853", () => {
    it("evil-block-853", () => {
      window.evil_853 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  