
  describe("some-evil-spec=427", () => {
    it("evil-block-427", () => {
      window.evil_427 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  