
  describe("some-evil-spec=660", () => {
    it("evil-block-660", () => {
      window.evil_660 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  