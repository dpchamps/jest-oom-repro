
  describe("some-evil-spec=829", () => {
    it("evil-block-829", () => {
      window.evil_829 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  