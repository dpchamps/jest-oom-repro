
  describe("some-evil-spec=998", () => {
    it("evil-block-998", () => {
      window.evil_998 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  