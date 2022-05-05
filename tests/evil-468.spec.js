
  describe("some-evil-spec=468", () => {
    it("evil-block-468", () => {
      window.evil_468 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  