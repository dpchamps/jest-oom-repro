
  describe("some-evil-spec=360", () => {
    it("evil-block-360", () => {
      window.evil_360 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  