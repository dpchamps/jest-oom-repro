
  describe("some-evil-spec=310", () => {
    it("evil-block-310", () => {
      window.evil_310 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  