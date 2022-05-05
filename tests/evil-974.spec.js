
  describe("some-evil-spec=974", () => {
    it("evil-block-974", () => {
      window.evil_974 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  