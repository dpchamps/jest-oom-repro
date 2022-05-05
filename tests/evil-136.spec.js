
  describe("some-evil-spec=136", () => {
    it("evil-block-136", () => {
      window.evil_136 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  