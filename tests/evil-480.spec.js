
  describe("some-evil-spec=480", () => {
    it("evil-block-480", () => {
      window.evil_480 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  