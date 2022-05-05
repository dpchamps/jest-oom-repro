
  describe("some-evil-spec=510", () => {
    it("evil-block-510", () => {
      window.evil_510 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  