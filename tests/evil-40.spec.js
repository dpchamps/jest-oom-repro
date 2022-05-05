
  describe("some-evil-spec=40", () => {
    it("evil-block-40", () => {
      window.evil_40 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  