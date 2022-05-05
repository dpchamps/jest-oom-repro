
  describe("some-evil-spec=941", () => {
    it("evil-block-941", () => {
      window.evil_941 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  