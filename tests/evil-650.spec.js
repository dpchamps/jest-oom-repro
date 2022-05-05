
  describe("some-evil-spec=650", () => {
    it("evil-block-650", () => {
      window.evil_650 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  