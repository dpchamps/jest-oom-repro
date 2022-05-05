
  describe("some-evil-spec=202", () => {
    it("evil-block-202", () => {
      window.evil_202 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  